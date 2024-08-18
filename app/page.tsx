'use client';

import { Chef } from '@/components/component/chef';
import { supabase } from '@/lib/supabase';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

function ChefPage() {
	const [ payments, setPayments ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		fetchPayments();
	}, []); // Add dependencies here if needed

	const fetchPayments = async () => {
		let { data, error, count, status, statusText } = await supabase.rpc('get_payments');
		if (error) console.error(error);
		else console.log(data);

		if (error) {
			console.error('Error fetching Payments:', error);
			return null;
		}

		console.log('Payments:', data);
    setPayments(data)
		return data;
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <Chef payments={payments} />;
}

export default ChefPage;
