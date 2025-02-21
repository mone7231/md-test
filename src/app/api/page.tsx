"use client";

import { useState } from "react";
import { IndexNavBar } from "@/src/components/IndexNavBar";


type Report = {
    id: number;
    title: string;
    body: string;
  };

  
export default function ApiPage() {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchReport(){
        setLoading(true);
        setReports([]);
        setError(null);
    
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          if (!response.ok) throw new Error("Failed to fetch report");
    
          const data: Report[] = await response.json();
          setReports(data.slice(0, 100)); // Show only first 10 records
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
    }

      async function downloadReport(): Promise<void> {
        setLoading(true);
        setError(null);
    
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          if (!response.ok) throw new Error("Failed to download report");
    
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
    
          const a = document.createElement("a");
          a.href = url;
          a.download = "report.json";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
    
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      }

    return (
            
            <div>
                <IndexNavBar/>

                <div className="p-5">
                    <h1 className="text-xl font-bold">Report Viewer</h1>

                    <div className="mt-4 flex gap-4">
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                        onClick={fetchReport}
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Fetch Report"}
                      </button>

                      <button
                        className="px-4 py-2 bg-green-600 text-white rounded"
                        onClick={downloadReport}
                        disabled={loading}
                      >
                        {loading ? "Downloading..." : "Download Report"}
                      </button>
                    </div>


                    {error && <p className="mt-4 text-red-600">{error}</p>}

                     {/* {report && (
                       <pre className="mt-4 p-3 bg-gray-100 border rounded overflow-auto max-h-96 text-black">
                         {JSON.stringify(report, null, 2)}
                       </pre>
                     )} */}
                </div>

                {reports.length > 0 && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-[80%]  m-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="">
                          <th className="border border-gray-300 p-2">ID</th>
                          <th className="border border-gray-300 p-2">Title</th>
                          <th className="border border-gray-300 p-2">Body</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reports.map((report) => (
                          <tr key={report.id} className="hover:bg-gray-800">
                            <td className="border border-gray-300 p-2 text-center">{report.id}</td>
                            <td className="border border-gray-300 p-2">{report.title}</td>
                            <td className="border border-gray-300 p-2">{report.body}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

            </div>
        );

}