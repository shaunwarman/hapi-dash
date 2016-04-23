export function helloHandler(request, reply) {

    return reply.view('hello', { title: 'Herro', message: 'How goes it!' });
}