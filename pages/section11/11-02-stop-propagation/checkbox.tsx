export default function checkbox() {
    
    const qqq2 = () => {
        alert("클릭 2번")
    }

    const qqq3 = (event) => {
        event.stopPropagation()
        alert("클릭 3번")
    }

    return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
