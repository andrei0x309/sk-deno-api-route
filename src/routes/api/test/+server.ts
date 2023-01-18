// THIS IMPORT (uses https://esm.sh/@supabase/supabase-js) WILL BREAK THE BUILD
// import { supabase } from '@/lib/deno/supaClientEdge'
import type { RequestHandler } from  './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = (async ({ request }) => {
  try {
 
return json({data: 'ok'})

    } catch (e) {
      console.log(e)
      return json({error: 'Internal Server Error'}, {status: 500})
    }
  
}) satisfies RequestHandler;
