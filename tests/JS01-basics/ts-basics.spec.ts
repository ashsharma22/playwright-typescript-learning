import { firefox, test, webkit } from '@playwright/test';

test('ts-basics - variables', async () => {
    let name: string ='Ashwani';    // can change
    const years: number = 20;       // cannot change
    let isLead: boolean = true; 
    let city = 'Bengaluru';         //type inferred as string
    name = 'Sumit';
    console.log(name, '-', years, '-', isLead, '-', city);
    });

test('ts basics - arrays and objects',async () => {
    //Array: list of the same type
    const browsers: string[] = ['chromium', 'firefox', 'webkit'];
    console.log(browsers[0]);                   // first item
    console.log(browsers.length);               // array length

    browsers.push('edge');                      // add item (allowed even with const)
    console.log(browsers);                      // print the array [ 'chromium', 'firefox', 'webkit', 'edge' ]
    
    // Object: key-value pairs, like a java pojo without a class
    const user = { email: 'a@test.com', password: 'Pass@123' };
    console.log(user.email);

    user.password = 'New@456'; //chaning a property is allowed
    console.log(user);
});


