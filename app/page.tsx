'use client';

import { Chef } from '@/components/component/chef';
import { supabase } from '@/lib/supabase';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

function Home() {
	const [ payments, setPayments ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		fetchPayments();
	}, []); // Add dependencies here if needed

  const fetchPayments = async () => {
    try {
      // Execute the stored procedure (RPC) to get payments
      const { data, error, status, statusText } = await supabase.rpc('get_payments');
  
      // Handle any errors returned by Supabase
      if (error) {
        console.error('Error fetching Payments:', error.message);
        return null;
      }
  
      // Log the received payments data
      console.log('Payments:', data);
  
      // Update the state with the fetched payments data
      setPayments(data);
  
      // Return the fetched data
      return data;
    } catch (err) {
      // Catch any unexpected errors
      console.error('Unexpected error fetching Payments:', err);
      return null;
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
