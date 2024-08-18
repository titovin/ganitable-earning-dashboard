'use client';

import { Chef } from '@/components/component/chef';
import supabase from '@/lib/supabase';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function ChefPage() {
	const [ payments, setPayments ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		fetchPayments();
	}, []); // Add dependencies here if needed

	const fetchPayments = async () => {
		setIsLoading(false);
		let { data, error, count, status, statusText } = await supabase.rpc('get_payments');
		if (error) console.error(error);
		else console.log(data);

		if (error) {
			console.error('Error fetching Payments:', error);
			return null;
		}

		setPayments(data);
		return data;
	};

	if (isLoading) {
		return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <Image
        src="/ganitable-loader.gif" // The path should be relative to the public folder
        width={500}
        height={500}
        alt="Ganitable"
      />
    </div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <Chef payments={payments} />;
}

export default ChefPage;
