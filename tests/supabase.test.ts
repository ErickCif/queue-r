import { defaults } from 'jest-config'
import {expect, jest, test} from '@jest/globals';
import {supabase} from "../src/lib/supabaseClient";

test('supabase client created', async () => {
    expect(supabase).toBeDefined();
})

