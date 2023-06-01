export default function Page() {
    // return "aa/bb/page.js"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                <main className="flex min-h-screen flex-col items-center justify-between p-24">

                    "aa/bb/page.js"

                </main>
            )
        }, 2000)
    })
}