import { Table, Popconfirm, Button } from 'antd';

const UserList: React.FC<{
  users: { name: string }[];
  onDelete: (id: string) => void;
}> = ({ onDelete, users }) => {
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
      code: 100,
      parent_code: null,
      children: [
        {
          key: 11,
          name: 'Resource1',
          type: 'Debit',
          code: 101,
          parent_code: 100,
          children: [
            {
              key: 111,
              name: 'Resource3',
              type: 'Debit',
              code: 103,
              parent_code: 101,
            },
          ],
        },
        {
          key: 12,
          name: 'Resource2',
          type: 'Debit',
          code: 102,
          parent_code: 100,
        },
      ],
    },
    {
      key: 2,
      name: 'Resource4',
      type: 'Debit',
      code: 200,
      parent_code: null,
      children: [
        {
          key: 21,
          name: 'Resource5',
          type: 'Debit',
          code: 201,
          parent_code: 200,
        },
      ],
    },
  ];
  // const data = [
  //   {
  //     key: 1,
  //     name: 'Resource',
  //     type: 'Debit',
  //     code: 100,
  //     parent_code: null,
  //     children: [
  //       {
  //         key: 11,
  //         name: 'Resource1',
  //         type: 'Debit',
  //         code: 101,
  //         parent_code: 100,
  //         children: [
  //           {
  //             key: 131,
  //             name: 'Resource3',
  //             type: 'Debit',
  //             code: 103,
  //             parent_code: 101,
  //           },
  //         ],
  //       },
  //       {
  //         key: 11,
  //         name: 'Resource2',
  //         type: 'Debit',
  //         code: 102,
  //         parent_code: 100,
  //         children: [
  //           {
  //             key: 131,
  //             name: 'Resource5',
  //             type: 'Debit',
  //             code: 201,
  //             parent_code: 200,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     key: 5,
  //     name: 'Resource4',
  //     type: 'Debit',
  //     code: 200,
  //     parent_code: null,
  //   },
  // ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
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
  return (
    <Table
      columns={columns}
      rowSelection={{
        ...rowSelection,
      }}
      dataSource={data}
    />
  );
};

export default UserList;
