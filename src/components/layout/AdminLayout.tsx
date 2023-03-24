import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
    return (
        <div>
            {/* content goes here */}
            {children}
            {/* content goes here */}

        </div>
    );
};

export default AdminLayout;