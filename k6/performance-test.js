import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  
    { duration: '1m', target: 20 },   
    { duration: '30s', target: 0 },   
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], 
    http_req_failed: ['rate<0.01'],   
  },
};

export default function () {
  const BASE_URL = 'https://creative-sherbet-a51eac.netlify.app';

  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  
  const payload = JSON.stringify({
    nome: 'Performance Test Course',
    ano: '2025',
    vagas: '1',
  });

  
  const params = {
    headers,
    tags: { test_type: 'load', endpoint: 'api/cursos' },
  };

  
  const homeRes = http.get(BASE_URL, params);
  check(homeRes, {
    'homepage status is 200': (r) => r.status === 200,
    'homepage loads in under 1s': (r) => r.timings.duration < 1000,
  });

  
  const registerRes = http.post(`${BASE_URL}/api/cursos`, payload, params);
  check(registerRes, {
    'registration status is 200': (r) => r.status === 200,
    'registration response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); 
}
