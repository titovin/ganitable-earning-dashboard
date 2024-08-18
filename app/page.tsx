'use client';

import { Chef } from '@/components/component/chef';
import supabase from '@/lib/supabase';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

function Home() {
	const [ payments, setPayments ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		fetchPayments();
	}, []); // Add dependencies here if needed

  async function fetchPayments() {
    try {
      const { data, error } = await supabase.rpc('get_payments');
  
      if (error) {
        console.error('Error fetching Payments:', error.message);
        return { notFound: true }; // Return `notFound` if data cannot be fetched
      }
  
      return {
        props: {
          payments: data,
        },
      };
    } catch (err) {
      console.error('Unexpected error during prerendering:', err);
      return { notFound: true }; // Handle unexpected errors
    }
  };
  

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <Chef payments={payments} />;
}

export default Home;
