export default function head({ params }: any) {
 
  return (
    <>
      <title>{`Dev ui | ${params.title}`}</title>
    </>
  );
}
