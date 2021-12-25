import constant from "./constant"

const common = {
    image: (val) => constant.path + val?.data.attributes.formats.large.url

}

export default common