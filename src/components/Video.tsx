import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch, useAppSelector } from '../store'
import { Loader } from 'lucide-react'

export function Video() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()
  const isCurrentLoading = useAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isCurrentLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          onEnded={handlePlayNext}
        />
      )}
    </div>
  )
}
