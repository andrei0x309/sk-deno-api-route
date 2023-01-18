import type { PageServerLoad } from './$types';
// THIS IMPORT ( uses https://esm.sh/@supabase/supabase-js ) WILL WORK
import { supabase } from '@/lib/node/supaClientFS'
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {

  try {
    return {
      test: 'test'
    }
  } catch (e) {
    console.log(e)
    throw error(500, 'Internal Server Error')
  }

}
