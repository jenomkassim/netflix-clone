import {ParentContainer, Parent, Container, Pane, Title, SubTitle, Image} from "./styles/jumbotron";

function Jumbotron({children, direction = "row", ...restProps}) {
    return (
        <ParentContainer>
            <Parent direction={direction}>
                {children}
            </Parent>
        </ParentContainer>
    )
}

export default Jumbotron

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
    return (
        <Pane {...restProps}>
            {children}
        </Pane>
    )
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Jumbotron.SubTitle = function JumbotronSubtitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )

}

Jumbotron.Image = function JumbotronImage({...restProps}) {
    return (
        <Image {...restProps} />
    )
}