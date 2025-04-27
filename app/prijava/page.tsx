import { Suspense } from "react";
import PrijavaForm from "@/components/PrijavaForma";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <Suspense fallback={<div>Učitavanje forme...</div>}>
          <PrijavaForm />
        </Suspense>
      </div>
    </div>
  );
}
