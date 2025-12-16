import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-black h-dvh gap-2 text-center flex flex-col items-center justify-center">
      {" "}
      <h2 className="text-white font-bold text-[2rem]">Not Found</h2>
      <p className="text-white font-normal text-[2rem]">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-white bg-blue-500 px-5 py-2 rounded-2xl  overflow-hidden font-normal text-[2rem]"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
