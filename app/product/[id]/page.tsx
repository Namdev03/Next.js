type DetailPageProps = {
  params: {
    id: string;
  };
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
console.log('DetailPage id:', id);
  return <div>DetailPage: {id}</div>;
}