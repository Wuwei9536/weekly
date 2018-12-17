import React from 'react';
import ServerContext from '../server/context';

const connect = Model => ({
    View,
    Loading,
    Style
}) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            if (props.staticContext) {
                ServerContext.setCSS(Style._getCss());
            }
            this.state = {
                ready: false
            };
        }

        async componentDidMount() {
            try {
                await Model.onMount();
            } catch (e) {
                console.error(e);
            }
            this.onReady();
        }

        onReady = () => {
            this.setState({
                ready: true
            });
        }

        render() {
            const { ready } =this.state;
            if (Loading && ready === false) {
                return (<Loading />);
            }
            return (
                <View
                    {...this.props}
                    store={Model}
                />);
        }
    };
};
export default connect;
