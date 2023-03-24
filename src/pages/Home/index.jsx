import { usePodcasts } from '../../hooks/usePodcasts'

export const Home = () => {
  const {
    state: { podcasts },
  } = usePodcasts()

  console.log(podcasts)

  return <div>Home</div>
}
