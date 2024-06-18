import "./styles.css";

type UserArg = {
    userLog: string
}

const User = ({userLog}: UserArg) => {
    return (
        <section className="user">
            <p><b>User:</b> {userLog}</p>
        </section>
    );
}

export default User;