interface DeleteConfirmProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirm({
  open,
  onClose,
  onConfirm,
}: DeleteConfirmProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm animate-fadeIn">
        <h2 className="text-lg font-semibold mb-3">Potvrda brisanja</h2>
        <p className="text-gray-700 mb-6">
          Jeste li sigurni da želite obrisati ovu poruku? Ova radnja je
          nepovratna.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Odustani
          </button>

          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Obriši
          </button>
        </div>
      </div>
    </div>
  );
}
