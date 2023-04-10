import { useParams } from 'react-router-dom'
function Product() {
  const { id } = useParams()
  return (
    <div className="p-2 rounded space-y-4 bg-gray-100 w-1/2">
      <div className="uppercase font-bold text-lg">Product: Speakers (18)</div>
      <div>ID: {id}</div>
      <div className="text-sm">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum
        porta. Vivamus suscipit tortor eget felis porttitor volutpat. Cras
        ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero
        malesuada feugiat. Donec rutrum congue leo eget malesuada. Quisque velit
        nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut
        libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula
        elementum sed sit amet dui. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna
        dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      </div>
      <div className="text-sm">
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
        nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt
        nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
        aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet
        quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero
        malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
      </div>
      <div className="text-sm">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur aliquet
        quam id dui posuere blandit. Vivamus magna justo, lacinia eget
        consectetur sed, convallis at tellus. Donec rutrum congue leo eget
        malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
        eget tincidunt nibh pulvinar a.
      </div>
    </div>
  )
}

export default Product
