/*
export function queryProductList() {
  return fetch('/api/products').then(res => res.json());
}
*/
// mock request service by setTimeout
export function queryProductList() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: [
                    { id: 1, name: 'dva', type: 'debit', category: 'Resource' },
                    { id: 2, name: 'antd', type: 'credit', category: 'Money' },
                ],
            });
        }, 2000);
    });
}