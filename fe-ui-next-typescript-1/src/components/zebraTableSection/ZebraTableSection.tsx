"use client";
import { ZebraTableProps } from "@/interface";
import { useTableStore } from "@/store/useTableStore/useTableStore";
import clsx from "clsx";
import { useEffect } from "react";

const ZebraTableSection: React.FC<ZebraTableProps> = ({ rows }) => {
  const { selectedRowId, selectRow } = useTableStore();
  useEffect(() => {
    console.log("ZebraTableSection rows:", rows);
  });

  return (
    <div className="rounded-xl p-4 shadow-inner bg-[#e0e0e0]">
      <table className="w-full table-auto rounded overflow-hidden">
        <thead>
          <tr className="text-left text-gray-700">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {[
            rows.map((row, index) => (
              <tr
                key={row.id}
                className={clsx(
                  "transition cursor-pointer",
                  index % 2 === 0 ? "bg-[#f0f0f3]" : "bg-[#e6e6e6]",
                  selectedRowId === row.id && "shadow-lg bg-white text-[#333]",
                  "hover:bg-white hover:shadow-md"
                )}
                onClick={() => selectRow(row.id)}
              >
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.email}</td>
              </tr>
            )),
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default ZebraTableSection;
