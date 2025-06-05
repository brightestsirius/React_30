enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

interface UserInfoProps {
    username: string;
    role: UserRole;
}

const UserInfo = ({ username, role }: UserInfoProps) => {
    return (
        <div>
            <p>User: {username}</p>
            <p>Role: {role}</p>
            {role === UserRole.Admin && <p style={{ color: 'red' }}>Administrator privileges!</p>}
        </div>
    );
};

// Використання
const AppEnum = () => {
    return (
        <>
            <UserInfo username="SuperUser" role={UserRole.Admin} />
            <UserInfo username="RegularEditor" role={UserRole.Editor} />
        </>
    );
};