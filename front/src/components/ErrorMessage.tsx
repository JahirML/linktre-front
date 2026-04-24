type Props = {
  children: React.ReactNode;
};

function ErrorMessage({ children }: Props) {
  return (
    <p className="text-red-600 bg-red-200 font-bold py-2 text-center">
      {children}
    </p>
  );
}

export default ErrorMessage;
