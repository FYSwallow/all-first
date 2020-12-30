<script>
export default {
    name: 'MenuItem',
    functional: true, //函数式组件,无内部状态,只有一个传入的props
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render(h, context) {
        const { icon, title } = context.props
        const vnodes = []

        if (icon) {
            vnodes.push(<i class={icon} />)
        }

        if (title) {
            vnodes.push(<span slot="title">{title}</span>)
        }

        return vnodes
    }
}
</script>

<style>
</style>