import { BLADE_NAME, BLADE_ADMIN } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load = ({ params }) => {
    const url = `http://${BLADE_ADMIN}.${BLADE_NAME}.test/admin`;
        throw redirect(302, url);
};
