import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.error('redirect triggered!');
	redirect(302, '/signin');
};
