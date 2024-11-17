import Player from './components/Player';
import Enemy from './components/Enemy';
export default function GamePage() {
    return (
        <main className="flex flex-col h-screen justify-start items-center p-10 ">
            <div className="space relative flex flex-col items-center border-2 border-white w-[50vw] h-full p-5">
                <h1 className="text-4xl font-bold text-center">Welcome to Type Invaders</h1>
                <div className=' absolute top-40'>
                    <Enemy />
                </div>
                <div className='absolute bottom-4'>
                    <Player />
                </div>
            </div>
        </main>
    );
}
