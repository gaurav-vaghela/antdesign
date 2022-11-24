import { Table, Popconfirm, Button } from 'antd';

const UserList: React.FC<{ users: { name: string }[]; onDelete: (id: string) => void }> = ({
    onDelete,
    users,
}) => {

    const columns = [
        {
            title: 'Account Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Account type',
            dataIndex: 'type',
            key: 'type',
            width: '12%',
        },
        {
            title: 'Account Category',
            dataIndex: 'category',
            width: '30%',
            key: 'category',
        },
    ];
    const data = [
        {
            key: 1,
            name: 'Resource',
            type: 'Debit',
            category: 'Resource',
            children: [
                {
                    key: 11,
                    name: 'Fixed Resource',
                    type: 'Debit',
                    category: 'Resource',
                },
                {
                    key: 13,
                    name: 'Fixed Resource 2',
                    type: 'Debit',
                    category: 'Resource',
                    children: [
                        {
                            key: 131,
                            name: 'Fixed Resource 3',
                            type: 'Debit',
                            category: 'Resource'
                        },
                    ],
                },
            ],
        },
        {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };


    // const columns = [
    //     {
    //         title: 'Account Name',
    //         dataIndex: 'name',
    //     },
    //     {
    //         title: 'Actions',
    //         render: (text, record) => {
    //             return (
    //                 <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
    //                     <Button>Delete</Button>
    //                 </Popconfirm>
    //             );
    //         },
    //     },
    //     {
    //         title: 'Account Type',
    //         dataIndex: 'type',
    //     },
    //     {
    //         title: 'Account Category',
    //         dataIndex: 'category',
    //     },
    // ];
    return <Table
        columns={columns}
        rowSelection={{
            ...rowSelection,
        }}
        dataSource={data}
    />;
};

export default UserList;