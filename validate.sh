#!/usr/bin/env bash
set +o posix

sleep 10
nc -zv 127.0.0.1 8000
