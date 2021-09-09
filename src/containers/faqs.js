import faqsData from '../local-data/faqsData'
import { Faq } from '../components'

export function FaqContainer() {
    return(
        <Faq>
            <Faq.Title>Frequently Asked Questions</Faq.Title>
            {faqsData.map(item =>
            <Faq.Item key={item.id}>
                <Faq.Header>{item.header}</Faq.Header>
                <Faq.Body>{item.body}</Faq.Body>
            </Faq.Item>
            )}
        </Faq>
    )
}