import { test, expect } from '@playwright/test';

test('leaseTemplate', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  // Click text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw
  await page.locator('text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw').click();
  // Click input[name="email"]
  await page.locator('input[name="email"]').click();
  // Click input[name="email"]
  await page.locator('input[name="email"]').click();
  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('admin@zebra.project-safari.io');
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('Riddikulus');
  // Press Enter
  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('http://localhost:3000/');
  // Click text=Create Lease
  await page.locator('text=Create Lease').click();
  await expect(page).toHaveURL('http://localhost:3000/lease');
  // Click div[role="button"]:has-text("​")
  await page.locator('div[role="button"]:has-text("​")').click();
  // Click text=3 Node ND Cluster
  await page.locator('text=3 Node ND Cluster').click();
  // Click text=Submit
  await page.locator('text=Submit').click();
  // Click text=3 Node ND Cluster
  await page.locator('text=3 Node ND Cluster').click();
  // Click text=3 Node vND Cluster
  await page.locator('text=3 Node vND Cluster').click();
  // Click text=Submit
  await page.locator('text=Submit').click();
  // Click text=3 Node vND Cluster
  await page.locator('text=3 Node vND Cluster').click();
  // Click text=2 Node nd-cluster
  await page.locator('text=2 Node nd-cluster').click();
  // Click text=Submit
  await page.locator('text=Submit').click();
  // Click text=2 Node nd-cluster
  await page.locator('text=2 Node nd-cluster').click();
  // Click text=3 Node nd-cluster & APIC
  await page.locator('text=3 Node nd-cluster & APIC').click();
  // Click text=Submit
  await page.locator('text=Submit').click();
  // Click text=3 Node nd-cluster & APIC
  await page.locator('text=3 Node nd-cluster & APIC').click();
  // Click text=Custom Lease Request
  await page.locator('text=Custom Lease Request').click();
  // Click text=Next
  await page.locator('text=Next').click();
});


test('customTemplate', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  // Click text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw
  await page.locator('text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw').click();
  // Click input[name="email"]
  await page.locator('input[name="email"]').click();
  // Click input[name="email"]
  await page.locator('input[name="email"]').click();
  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('admin@zebra.project-safari.io');
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('Riddikulus');
  // Press Enter
  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('http://localhost:3000/');
  // Click text=Create Lease
  await page.locator('text=Create Lease').click();
  await expect(page).toHaveURL('http://localhost:3000/lease');
  // Click div[role="button"]:has-text("​")
  await page.locator('div[role="button"]:has-text("​")').click();
  // Click text=Custom Lease Request
  await page.locator('text=Custom Lease Request').click();
  // Click text=Next
  await page.locator('text=Next').click();
  // Click text=Type​ >> div[role="button"]
  await page.locator('text=Type​ >> div[role="button"]').click();
  // Click li[role="option"]:has-text("Lab")
  await page.locator('li[role="option"]:has-text("Lab")').click();
  // Click text=Submit Request
  await page.locator('text=Submit Request').click();
  // Click text=Use this request as a template for future reservations
  await page.locator('text=Use this request as a template for future reservations').click();
  // Click input[name="template"]
  await page.locator('input[name="template"]').click();
  // Fill input[name="template"]
  await page.locator('input[name="template"]').fill('Name the template');
  // Click input[name="Name"]
  await page.locator('input[name="Name"]').click();
  // Fill input[name="Name"]
  await page.locator('input[name="Name"]').fill('Nicholas Davidson');
  // Click input[name="Description"]
  await page.locator('input[name="Description"]').click();
  // Fill input[name="Description"]
  await page.locator('input[name="Description"]').fill('This is a test template creation');
  // Click text=Submit Request
  await page.locator('text=Submit Request').click();
  // Click text=View Status
  await page.locator('text=View Status').click();
});

test('login', async ({ page }) => {
  // go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');
  // Click input[name="email"]
  await page.locator('input[name="email"]').click();
  // Click text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw
  await page.locator('text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw').click();
  // Click input[name="email"]
  await page.locator('input[name="email"]').click();
  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('admin@zebra.project-safari.io');
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('Riddikulus');
  // Press Enter
  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('http://localhost:3000/');
});

test('resourceManagement', async({ page }) => {
   // Go to http://localhost:3000/login
   await page.goto('http://localhost:3000/login');
   // Click text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw
   await page.locator('text=Email Address *Email Address *Password *Password *Remember meSign InForgot passw').click();
   // Click input[name="email"]
   await page.locator('input[name="email"]').click();
   // Click input[name="email"]
   await page.locator('input[name="email"]').click();
   // Fill input[name="email"]
   await page.locator('input[name="email"]').fill('admin@zebra.project-safari.io');
   // Click input[name="password"]
   await page.locator('input[name="password"]').click();
   // Fill input[name="password"]
   await page.locator('input[name="password"]').fill('Riddikulus');
   // Press Enter
   await page.locator('input[name="password"]').press('Enter');
   await expect(page).toHaveURL('http://localhost:3000/');
   // Click text=View inventory
   await page.locator('text=View inventory').click();
   // Click text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="delete"] >> nth=0
   await page.locator('text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="delete"]').first().click();
   // Click text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="delete"] >> nth=1
   await page.locator('text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="delete"]').nth(1).click();
   // Click text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="delete"] >> nth=2
   await page.locator('text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="delete"]').nth(2).click();
   // Check text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="Select row"]
   await page.locator('text=02ba42a1-9bb6-470e-a030-3a4a1a424efdDatacenterinactivefree2022-08-23T09:28:17.10 >> [aria-label="Select row"]').check();
   // Uncheck [aria-label="Unselect row"]
   await page.locator('[aria-label="Unselect row"]').uncheck();
 });
