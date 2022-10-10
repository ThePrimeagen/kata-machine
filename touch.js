export default class GroupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            userID: props.userID,
            groupID: props.groupID,
            username: props.username,
        };
    }

    getTasks = () => {
        if (this.state.userID !== undefined && this.state.tasks.length == 0) {
            return null;
        }
    };

    isShowTasks = this.state.tasks.length > 0;
    isShowChat = [this.state.userID, this.state.groupID].includes(undefined);

    render() {
        return (
            <div className="groupComponent">
                <div className="centerSection" style={{ width: "85%" }}>
                    {this.isShowChat && (
                        <ChatBox
                            username={this.state.username}
                            userID={this.state.userID}
                            groupID={this.props.groupID}
                            messages={[]}
                        />
                    )}
                </div>
                <div
                    className="rightSection"
                    style={{ width: "20%", height: "100%" }}
                >
                    <h1 style={{ textAlign: "center" }}>Task List</h1>

                    {this.isShowTasks && (
                        <GroupTaskBar
                            tasks={this.state.tasks}
                            style={{ width: "100%" }}
                        />
                    )}
                </div>
            </div>
        );
    }
}
