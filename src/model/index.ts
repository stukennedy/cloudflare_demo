export const getAllCustomers = async (): Promise<
  Record<string, string | number>[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 0, name: 'Stu' },
        { id: 1, name: 'Bob' },
      ]);
    }, 2000);
  });
};
