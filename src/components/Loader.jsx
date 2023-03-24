import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
      className="mt-[40px] text-[#f1f1f1] font-bold text-[14px]"
      >{progress.toFixed(1)}%
      </p>
    </Html>
  )
}

export default Loader