
async function getData() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return  <pre>{JSON.stringify(data, null, 2)}</pre>
}
