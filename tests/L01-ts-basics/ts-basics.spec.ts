import { test } from '@playwright/test';

test('ts-basics - variables', async () => {
    let name: string ='Ashwani';    // can change
    const years: number = 20;       // cannot change
    let isLead: boolean = true; 
    let city = 'Bengaluru';         //type inferred as string
    name = 'Sumit';
    console.log(name, '-', years, '-', isLead, '-', city);

});

