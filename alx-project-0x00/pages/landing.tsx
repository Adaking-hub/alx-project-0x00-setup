import Card from "@/components/Card"
import Button from "@/components/Button";


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <Card />

       {/* ✅ Buttons with the required rounded styles */}
      <div className="mt-6 flex flex-col gap-4">
        <Button title="Small Button" styles="rounded-sm bg-blue-500 text-white px-4 py-2" />
        <Button title="Medium Button" styles="rounded-md bg-green-500 text-white px-4 py-2" />
        <Button title="Large Button" styles="rounded-full bg-red-500 text-white px-4 py-2" />
      </div>
    </div>
  )
}
export default Landing