'use client';


export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
  }
){
    console.log(error, reset); // 临时使用参数
        
    return (
        <main className="p-4 md:p-6">
            <div className="mb-8 space-y-4">
                <h1 className="font-semibold text-lg md:text-2xl">
                    Please complete setup
                </h1>
                <p>
                  Inside the Vercel Postgres dashboard, create a table based on the
                  schema defined in this repository.
                </p>
                <pre className="my-4 px-3 py-4 bg-black text-white rounded-lg max-w-2xl overflow-scroll flex text-wrap"></pre>
                <p>Insert a row for testing:</p>
            </div>
        </main>
    )
}