'use client';

import { Chef } from '@/components/component/chef';
import supabase from '@/lib/supabase';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

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
				<svg
					className="w-12 h-12 animate-spin"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 4V2M12 22V20M4 12H2M22 12H20M18.3639 18.3639L16.9497 16.9497M7.03033 7.03033L5.61612 5.61612M18.3639 5.61612L16.9497 7.03033M7.03033 16.9497L5.61612 18.3639"
						stroke="#85D64A"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <Chef payments={payments} />;
}

export default ChefPage;
