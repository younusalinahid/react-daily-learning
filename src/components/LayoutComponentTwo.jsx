import useWindowWidth from "../hooks/useWindowWidth";

export default function LayoutComponentOne() {
  const onSmallScreen = useWindowWidth();

  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h1>This is another component</h1>
    </div>
  );
}
