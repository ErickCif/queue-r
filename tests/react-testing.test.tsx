import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomePageComponent from '../src/components/HomePageComponent';

describe('HomePageComponent', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { href: '/' },
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('navigates to Spotify testing page when Spotify button is clicked', () => {
        const { getByRole } = render(<HomePageComponent />);
        const spotifyButton = getByRole('button', { name: 'Spotify Testing' });
        fireEvent.click(spotifyButton);
        expect(window.location.href).toBe('/spotify/home/');
    });

    it('navigates to Supabase testing page when Supabase button is clicked', () => {
        const { getByRole } = render(<HomePageComponent />);
        const supabaseButton = getByRole('button', { name: 'Supabase Testing' });
        fireEvent.click(supabaseButton);
        expect(window.location.href).toBe('/supabase/sb-testing/');
    });
});