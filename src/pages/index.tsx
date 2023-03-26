import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import HomePageComponent from "../components/HomePageComponent";

describe('HomePageComponent', () => {
    it('navigates to Spotify testing page when Spotify button is clicked', () => {
        const { getByRole } = render(<HomePageComponent />);
        const spotifyButton = getByRole('button', { name: 'Spotify Testing' });
        fireEvent.click(spotifyButton);
        expect(window.location.pathname).toBe('/spotify/home/');
    });

    it('navigates to Supabase testing page when Supabase button is clicked', () => {
        const { getByRole } = render(<HomePageComponent />);
        const supabaseButton = getByRole('button', { name: 'Supabase Testing' });
        fireEvent.click(supabaseButton);
        expect(window.location.pathname).toBe('/supabase/sb-testing/');
    });
});
