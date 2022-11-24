import { useModel } from 'umi';
import UserList from '@/components/UserList';

const Products = () => {
    const { dataSource, reload, deleteProducts } = useModel('useUserList');
    return (
        <div>
            <a onClick={() => reload()}>reload</a>
            <UserList onDelete={deleteProducts} users={dataSource} />
        </div>
    );
};

export default Products;