export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  
  const { products, pagination } = await fetchProducts({
	page: Number(page),
	filters: {
	  'filters[featured][$eq]': 'true'
	}
  });

  return new Response(JSON.stringify({ products, pagination }), {
	headers: {
	  'Content-Type': 'application/json'
	}
  });
}