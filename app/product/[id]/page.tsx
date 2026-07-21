type DetailPageProps = {
  params: {
    id: string;
  };
};

export default function DetailPage({ params }: DetailPageProps) {
  const { id } = params;

  return <div>DetailPage: {id}</div>;
}